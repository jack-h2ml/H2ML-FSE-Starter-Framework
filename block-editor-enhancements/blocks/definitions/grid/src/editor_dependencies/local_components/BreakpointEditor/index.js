/**
 * WordPress dependencies.
 */

import {
	Notice,
	PanelBody,
	RangeControl,
	TextControl,
	Button,
	Tooltip,
	Modal,
	TabPanel,
	__experimentalText as Text,
	__experimentalVStack as VStack,
	__experimentalHStack as HStack
} from '@wordpress/components';

import {
	store as blockEditorStore
} from '@wordpress/block-editor';

import {
	__,
	_n,
	sprintf
} from '@wordpress/i18n';

import {
	useSelect,
} from '@wordpress/data';

import {
	useState,
	useEffect,
	useRef,
	createContext,
	useMemo,
	useContext
} from '@wordpress/element';

import { grid, plus } from '@wordpress/icons';

/**
 * External dependencies.
 */

import html2canvas from 'html2canvas';

/**
 * Internal dependencies.
 */

import {
	generateGridTemplateAreas,
	generateGridTemplateColumnsOrRows,
} from './../../utils.js';

import {
	GridNoColsHelpText,
	GridNoRowsHelpText
} from './../HelpText';

import { GridEditor } from './../GridEditor';

/**
 * HELPERS
 */

const cloneCanvas = (oldCanvas) => {

    //create a new canvas
    var newCanvas = document.createElement('canvas');
    var context = newCanvas.getContext('2d');

    //set dimensions
    newCanvas.width = oldCanvas.width;
    newCanvas.height = oldCanvas.height;

    //apply the old canvas to the new one
    context.drawImage(oldCanvas, 0, 0);

    //return the new canvas
    return newCanvas;
}

/**
 * Global
 */

const BreakpointConfigureBreakpointContext = createContext({
	breakpoint: null,
	configureBreakpoint: (previews) => { }
});

const BreakpointSidebarGridAreaPreviewContext = createContext({
	generatedPreviews: null,
	setGeneratedPreviews: (previews) => { }
});

const BreakpointGridEditingContext = createContext({
	gridEditorIsEditing: null,
	setGridEditorIsEditing: (previews) => { }
});

/**
 * The JSX
 */

const BreakpointSidebarGridAreaPreview = (props) => {
	const {
		title,
		canvas,
		represents
	} = props;
	//
	const ref = useRef();
	useEffect(() => {
		ref.current.appendChild(cloneCanvas(canvas));
	}, []);
	//
	return (
		<BreakpointGridEditingContext.Consumer>
			{context => (
				<VStack
					spacing={2}
					className={[
						'h2mlGridBreakpointsGridAreaPreview',
						context.gridEditorIsEditing === represents ? 'active' : false,
					]}
					ref={ref}
					onClick={() => {
						context.setGridEditorIsEditing(represents);
					}}
				>
					<Text
						size={'12px'}
						upperCase={true}
					>
						{title}
					</Text>
				</VStack>
			)}
		</BreakpointGridEditingContext.Consumer>
	)
}

const BreakpointSidebarGridAreaPreviews = () => {
	//
	return (
		<BreakpointSidebarGridAreaPreviewContext.Consumer>
			{context => context.generatedPreviews ? (
				<VStack spacing={4}>
					<Text
						color={'rgb(117, 117, 117)'}
						size={'12px'}
					>
						{__("Select Grid Areas below to add them to this breakpoint defininition. Areas which are not selected will be hidden when this breakpoint is active.", 'h2ml')}
					</Text>
					{context.generatedPreviews.map((preview, i) => (
						<BreakpointSidebarGridAreaPreview
							key={`breakpointCanvas${i}`}
							title={preview.title}
							canvas={preview.canvas}
							represents={preview.represents}
						/>
					))}
				</VStack>
			) : (
				<Text
					color={'rgb(117, 117, 117)'}
					size={'12px'}
				>
					{__("Loading Grid Area Previews...", 'h2ml')}
				</Text>
			)}
		</BreakpointSidebarGridAreaPreviewContext.Consumer>
	)
}

const BreakpointSidebarDefinitions = (useInnerBlocksProps) => {
	//
	return (
		<BreakpointConfigureBreakpointContext.Consumer>
			{(context) => (
				<VStack
					as={'div'}
					spacing={4}
				>
					<VStack
						as={'div'}
						spacing={4}
					>
						<RangeControl
							label={__("Breakpoint area number of Columns", 'h2ml')}
							value={context?.breakpoint?.colDefinitions.count ?? ''}
							onChange={count => {
								// Create a copy of the existing Column / Row definition.
								const definitionsCopy = JSON.parse(JSON.stringify(context.breakpoint.colDefinitions));
								const countDelta = count - definitionsCopy.count;
								// Clean up Column / Row templates.
								definitionsCopy.templates.splice(...countDelta > 0 ?
									[definitionsCopy.templates.length, 0, ...Array.from(Array(countDelta)).map(_ => '1fr')] : // Adding Columns
									[count, definitionsCopy.templates.length - 1] // Removing Columns
								);
								// Update the definition's count value and then set the attrbute. 
								context.setBreakpointAttributes({
									colDefinitions: {
										count,
										templates: definitionsCopy.templates
									},
									saved: false
								}
								)
							}}
							min={1}
							help={<GridNoColsHelpText />}
							__nextHasNoMarginBottom={true}
						/>
						<RangeControl
							label={__("Breakpoint area number of Rows", 'h2ml')}
							value={context?.breakpoint?.rowDefinitions.count ?? ''}
							onChange={count => {
								// Create a copy of the existing Column / Row definition.
								const definitionsCopy = JSON.parse(JSON.stringify(context.breakpoint.rowDefinitions));
								const countDelta = count - definitionsCopy.count;
								// Clean up Column / Row templates.
								definitionsCopy.templates.splice(...countDelta > 0 ?
									[definitionsCopy.templates.length, 0, ...Array.from(Array(countDelta)).map(_ => '1fr')] : // Adding Columns
									[count, definitionsCopy.templates.length - 1] // Removing Columns
								);
								// Update the definition's count value and then set the attrbute. 
								context.setBreakpointAttributes({
									rowDefinitions: {
										count,
										templates: definitionsCopy.templates
									},
									saved: false
								}
								)
							}}
							min={1}
							help={<GridNoRowsHelpText />}
							__nextHasNoMarginBottom={true}
						/>
						{(context?.breakpoint?.colDefinitions.count ?? 0 * context?.breakpoint?.rowCount ?? 0) > 49 && (
							<Notice status="warning" isDismissible={false}>
								{__(
									'The number of cells is greater than the recommended limit.',
									'h2ml'
								)}
							</Notice>
						)}
					</VStack>
					<PanelBody title={__("Grid Columns Settings", 'h2ml')} initialOpen={false}>
						{[...Array(context?.breakpoint?.colDefinitions.count ?? null)].map((_, i) => (
							<TextControl
								key={`breakpoint-col-settings-${i}`}
								label={sprintf(__("Breakpoint column %1$d Width", 'h2ml'), i + 1)}
								value={context?.breakpoint?.colDefinitions.templates[i]}
								onChange={template => {
									const templatesCopy = [...context.breakpoint.colDefinitions.templates];
									// Update the given Column / Row template and set the attribute.
									templatesCopy[i] = (template ? template : '1fr');
									context.setBreakpointAttributes({
										colDefinitions: {
											count: context.breakpoint.colDefinitions.count,
											templates: templatesCopy
										},
										saved: false
									})
								}
								}
							/>
						))}
					</PanelBody>
					<PanelBody title={__("Grid Rows Settings", 'h2ml')} initialOpen={false}>
						{[...Array(context?.breakpoint?.rowDefinitions.count ?? null)].map((_, i) => (
							<TextControl
								key={`breakpoint-row-settings-${i}`}
								label={sprintf(__("Breakpoint row %1$d Height", 'h2ml'), i + 1)}
								value={context.breakpoint.rowDefinitions.templates[i]}
								onChange={template => {
									const templatesCopy = [...context.breakpoint.rowDefinitions.templates];
									// Update the given Column / Row template and set the attribute.
									templatesCopy[i] = (template ? template : 'max-content');
									context.setBreakpointAttributes({
										rowDefinitions: {
											count: context.breakpoint.rowDefinitions.count,
											templates: templatesCopy
										},
										saved: false
									})
								}
								}
							/>
						))}
					</PanelBody>
					<PanelBody title={__("Breakpoint Minimum Height", 'h2ml')} initialOpen={false}>
						<TextControl
							label={__("Breakpoint Minimum Height", 'h2ml')}
							value={context?.breakpoint?.minHeight ?? ''}
							onChange={newMinHeight => setBreakpointAttributes({
								minHeight: newMinHeight,
								saved: false
							})}
						/>
					</PanelBody>
				</VStack>
			)}
		</BreakpointConfigureBreakpointContext.Consumer>
	)
}

const BreakpointSidebarSettings = (props) => {
	const {
		isNew
	} = props;

	const hmm = useContext(BreakpointConfigureBreakpointContext);
	console.log(hmm);

	//
	return (
		<BreakpointConfigureBreakpointContext.Consumer>
			{context => (
				<VStack spacing={4}>
					<Text
						color={'rgb(117, 117, 117)'}
						size={'12px'}
					>
						{__("You can configure the settings for this Breakpoint here, name is a required field, and must be set in order to save or update the breakpoint.", 'h2ml')}
					</Text>
					<TextControl
						label={__("Breakpoint Name", 'h2ml')}
						value={context?.breakpoint?.name ?? ''}
						help={isNew
							? __("Set the name of this Breakpoint.", 'h2ml')
							: __("This Breakpoint's name, this cannot be edited.", 'h2ml')
						}
						onChange={value => context.setBreakpointAttributes({
							name: value,
							saved: false
						})}
						readOnly={!isNew}
					/>
					<TextControl
						label={__("Breakpoint Media Query", 'h2ml')}
						value={context?.breakpoint?.mediaQuery ?? ''}
						help={__("Set the 'CSS Media Query' for this Breakpoint.", 'h2ml')}
						onChange={value => context.setBreakpointAttributes({
							mediaQuery: value,
							saved: false
						})}
					/>
					<Notice status="warning" isDismissible={false}>
						<>
							{__(
								"When creating your breakpoints remember precedence, that is the order in which your Breakpoints are defined, as 'CSS Media Queries' may override each other depending on the order in which they were added.",
								'h2ml'
							)}
							<br /><br />
							{__(
								"For example when adding a Breakpoint like (max-width: 600px) first, followed by another breakpoint like (max-width: 200px), the Breakpoint for (max-width: 600px) will take precendence over (max-width: 200px), even when the window is below 200px, as it was defined first.",
								'h2ml'
							)}
						</>
					</Notice>
				</VStack>
			)}
		</BreakpointConfigureBreakpointContext.Consumer>
	)
}

const BreakpointSidebar = (props) => {
	const {
		isNew
	} = props;
	//
	return (
		<VStack
			as={'div'}
			className={'h2mlGridBreakpointSidebar'}
			spacing={0}
		>
			<TabPanel
				className="h2mlGridBreakpointOptions"
				activeClass="active-tab"
				initialTabName={'settings'}
				tabs={[{
					name: 'settings',
					title: __("Settings", 'h2ml')
				}, {
					name: 'definitions',
					title: __("Definitions", 'h2ml')
				}, {
					name: 'gridAreas',
					title: __("Grid Areas", 'h2ml')
				}]}
			>
				{(tab) => {
					switch (tab.name) {
						case 'settings': {
							return (
								<BreakpointSidebarSettings
									isNew={isNew}
								/>
							)
						}
						case 'definitions': {
							return (
								<BreakpointSidebarDefinitions />
							)
						}
						case 'gridAreas': {
							return (
								<BreakpointSidebarGridAreaPreviews/>
							)
						}
					}
				}}
			</TabPanel>
		</VStack>
	)
}

//
//
//

const BreakpointTitle = (props) => {
	const {
		title
	} = props;
	//
	return (
		<HStack
			className="h2mlGridBreakpointTitle"
			alignment={'center'}
		>
			<Text
				size={'24px'}
			>
				{title ? (
					<span>{__("Editing", 'h2ml')} <em>{title}</em></span>
				) : (
					<span>{__("Adding new Breakpoint", 'h2ml')}</span>
				)}
			</Text>
		</HStack>
	)
}

//
//
//

const BreakpointGridEditorGridAreaPreviewCanvas = (props) => {
	const {
		canvas
	} = props;
	//
	const ref = useRef();
	useEffect(() => {
		ref.current.appendChild(cloneCanvas(canvas));
	}, []);
	//
	return (
		<VStack
			spacing={2}
			ref={ref}
		/>
	)
}

const BreakpointGridEditorGridAreaPreview = (props) => {
	const {
		clientId,
		breakpoint,
		breakpointName,
		gridAreaBlock,
	} = props;
	//
	const coords = breakpoint.gridAreasDefinitions.find(gridAreaDefinition => gridAreaDefinition.clientId === clientId)?.coords;
	//
	return (coords && (
		<div
			className={'h2mlBreakpointGridEditorGridAreaPreview'}
			style={{
				gridArea: coords
			}}
		>
			<BreakpointSidebarGridAreaPreviewContext.Consumer>
				{(context) => context.generatedPreviews && (
					<BreakpointGridEditorGridAreaPreviewCanvas
						canvas={context.generatedPreviews.find(generatedPreview => generatedPreview.represents === clientId).canvas}
					/>
				)}
			</BreakpointSidebarGridAreaPreviewContext.Consumer>
		</div>
	))
}

const BreakpointGridEditor = (props) => {
	const {
		target,
		gridBlock,
		saveFunction
	} = props;
	//
	return (
		<BreakpointConfigureBreakpointContext.Consumer>
			{context => (
				<div className={'h2mlGridBreakpointGridEditorWrapper'}>
					<div
						className={'h2mlBreakpointGridEditor'}
						style={{
							gridTemplateAreas: generateGridTemplateAreas(
								context?.breakpoint?.colDefinitions.count ?? 0,
								context?.breakpoint?.rowDefinitions.count ?? 0
							),
							gridTemplateColumns: generateGridTemplateColumnsOrRows(context?.breakpoint?.colDefinitions.templates ?? []),
							gridTemplateRows: generateGridTemplateColumnsOrRows(context?.breakpoint?.rowDefinitions.templates ?? []),
							minHeight: context?.breakpoint?.minHeight ?? ''
						}}
					>
						<GridEditor
							gridClientId={null}
							colCount={context?.breakpoint?.colDefinitions.count ?? 0}
							rowCount={context?.breakpoint?.rowDefinitions.count ?? 0}
							target={target}
							saveFunction={saveFunction}
						/>
						<div className="h2mlBreakpointGridAreas">
							{(target === undefined || target === false) && (
								gridBlock.innerBlocks.map(gridArea => (
									<BreakpointGridEditorGridAreaPreview
										key={`breakpointGridArea_${gridArea.clientId}`}
										clientId={gridArea.clientId}
										breakpoint={context.breakpoint}
										breakpointName={context?.breakpoint?.name ?? ''}
										gridAreaBlock={gridArea}
									/>
								))
							)}
						</div>
					</div>
				</div>
			)}
		</BreakpointConfigureBreakpointContext.Consumer>
	)
}

//
//
//

const BreakpointSave = (props) => {
	//
	const {
		disabled,
		isAdding,
		saveFunction
	} = props;
	//
	return (
		<BreakpointConfigureBreakpointContext.Consumer>
			{context => (
				<HStack
					className="h2mlGridBreakpointSave"
					alignment={'right'}
				>
					<Tooltip text={isAdding ? (
						__("Save Breakpoint", 'h2ml')
					) : (
						__("Update Breakpoint", 'h2ml')
					)}>
						<Button
							variant="secondary"
							disabled={disabled}
							onClick={() => {
								saveFunction(context.breakpoint);
								context.setBreakpointAttributes({
									saved: true
								});
							}}
						>
							{isAdding ? (
								__("Save Breakpoint", 'h2ml')
							) : (
								__("Update Breakpoint", 'h2ml')
							)}
						</Button>
					</Tooltip>
				</HStack>
			)}
		</BreakpointConfigureBreakpointContext.Consumer>
	)
}

//
//
//

export const BreakpointModal = (props) => {
	const {
		open,
		onRequestClose,
		gridRef,
		gridClientId,
		saveFunction
	} = props;

	//
	// Inherited values from Grid.
	//
	const { gridBlock } = useSelect((select) => ({ gridBlock: select(blockEditorStore).getBlock(gridClientId) }), []);
	const {
		attributes: {
			breakpointDefinitions,
			colDefinitions: inheritedColDefinitions,
			rowDefinitions: inheritedRowDefinitions,
			minHeight: inheritedMinHeight,
		},
		innerBlocks: gridAreas
	} = gridBlock;

	console.log(gridBlock);

	//
	// Set / Get Breakpoint attributes.
	//
	const [breakpoint, configureBreakpoint] = useState();
	const setBreakpointAttributes = (attributesDefinitions) => {
		const breakpointCopy = JSON.parse(JSON.stringify(breakpoint));
		Object.entries(attributesDefinitions).forEach(([attribute, value]) => {
			breakpointCopy[attribute] = value;
		});
		configureBreakpoint(breakpointCopy);
	}
	//
	// Update / Determine whether the breakpoint can be saved. 
	//
	const [canSave, setCanSave] = useState(null);
	useMemo(() => {
		if (canSave !== !!canSave) {
			setCanSave(false); // Mount Gaurd
		} else if (!canSave && breakpoint.name && breakpoint.saved === false) {
			setCanSave(true); // Enable save button
		} else if ((canSave && breakpoint.saved) || (canSave && !breakpoint.name)) {
			setCanSave(false); // Disable save button
			setBreakpointAttributes({ saved: null }) // Reset breakpoint save state
		};
	}, [breakpoint]);
	//
	// Get / Generate Grid Area Preview's.
	//
	const [generatedPreviews, setGeneratedPreviews] = useState(null);
	useEffect(() => {
		if(open) {
			Promise.all(gridAreas.map(async gridArea => {
				const width = window.getComputedStyle(gridRef.current.querySelector(`[data-block="${gridArea.clientId}"]`)).width;
				gridRef.current.querySelector(`[data-block="${gridArea.clientId}"]`).style.width = '400px';
				const x =  {
					title: 'Grid Area',
					canvas: await html2canvas(gridRef.current.querySelector(`[data-block="${gridArea.clientId}"]`)),
					represents: gridArea.clientId,
				}
				gridRef.current.querySelector(`[data-block="${gridArea.clientId}"]`).style.width = width;
				return x;
			})).then(generatedPreviews => setGeneratedPreviews(generatedPreviews));
		} else {
			setGeneratedPreviews(null);
		}
	}, [open]);
	//
	// State for determining whether the Grid Editor is editing a Grid Area. 
	//
	const [gridEditorIsEditing, setGridEditorIsEditing] = useState(false);
	//
	return (
		<>
			{open && (
				<Modal
					title="Configure Grid Breakpoints"
					onRequestClose={onRequestClose}
					isFullScreen={true}
					shouldCloseOnEsc={true}
					shouldCloseOnClickOutside={false}
					className={'h2mlGridBreakpointsModal'}
				>
					<VStack
						as={'div'}
						className={'h2mlGridBreakpointsEditorArea'}
						spacing={1}
						justify={'flex-start'}
					>
						<TabPanel
							className="h2mlGridBreakpointTabPanel"
							activeClass="active-tab"
							initialTabName={breakpointDefinitions.length ? breakpointDefinitions[0].name : 'addBreakpoint'}
							tabs={[
								{
									name: 'addBreakpoint',
									title: __("Add New Breakpoint", 'h2ml'),
									className: 'addBreakpoint',
									icon: plus,
								},
								...breakpointDefinitions.map(breakpoint => ({
									name: breakpoint.name,
									title: breakpoint.name,
									className: 'existingBreakpoint'
								}))
							]}
							onSelect={tabName => {
								//
								const selectedBreakPoint = breakpointDefinitions.find(breakpoint => breakpoint.name === tabName);
								//
								if (selectedBreakPoint) configureBreakpoint({
									...selectedBreakPoint,
									gridAreasDefinitions: gridBlock.innerBlocks.reduce((res, innerBlock) => [
										...res,
										{
											clientId: innerBlock.clientId,
											coords: (innerBlock.attributes.breakpointDefinitions?.[selectedBreakPoint.name]
												? innerBlock.attributes.breakpointDefinitions?.[selectedBreakPoint.name].coords
												: ''
											)
										}
									], []),
									saved: null
								});
								else configureBreakpoint({
									name: '',
									mediaQuery: '',
									minHeight: inheritedMinHeight,
									colDefinitions: inheritedColDefinitions,
									rowDefinitions: inheritedRowDefinitions,
									gridAreasDefinitions: [],
									saved: null
								});
							}}
						>
							{(tab) => {
								return (
									<BreakpointConfigureBreakpointContext.Provider value={{ breakpoint, setBreakpointAttributes }}>
										<BreakpointGridEditingContext.Provider value={{ gridEditorIsEditing, setGridEditorIsEditing }}>
											<BreakpointSidebarGridAreaPreviewContext.Provider value={{ generatedPreviews, setGeneratedPreviews }}>
												<BreakpointSidebar
													isNew={tab.name === 'addBreakpoint'}
												/>
											</BreakpointSidebarGridAreaPreviewContext.Provider>
										</BreakpointGridEditingContext.Provider>
										<BreakpointTitle
											title={tab.name === 'addBreakpoint' ? false : tab.name}
										/>
										<BreakpointSidebarGridAreaPreviewContext.Provider value={{ generatedPreviews, setGeneratedPreviews }}>
											<BreakpointGridEditor
												target={gridEditorIsEditing}
												gridBlock={gridBlock}
												saveFunction={(coords, clientId) => {
													setGridEditorIsEditing(false);
													setBreakpointAttributes({
														gridAreasDefinitions: breakpoint.gridAreasDefinitions.reduce((res, gridAreaDefinition) => [
															...res,
															...((gridAreaDefinition.clientId !== clientId) ? [gridAreaDefinition] : []),
														], [{
															clientId,
															coords: coords.parsed
														}]),
														saved: false
													});
												}}
											/>
										</BreakpointSidebarGridAreaPreviewContext.Provider>
										<BreakpointSave
											disabled={!canSave}
											isAdding={tab.name === 'addBreakpoint'}
											gridBlock={gridBlock}
											saveFunction={saveFunction}
										/>
									</BreakpointConfigureBreakpointContext.Provider>
								)
							}}
						</TabPanel>
					</VStack>
				</Modal>
			)}
		</>
	)
}