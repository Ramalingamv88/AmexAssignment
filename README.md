## Setup
- clone this repo and run ```yarn``` to install dependencies
- app spins up on localhost:3000 by default
- Node ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0" version Needed to run

## UI Breakdown
- the UI consists of 2 panes, left containing the entities and right the canvas to drop the entities on.
- drag entity from left pane into the small box on the right to add entity to workflow.
- you can update all fields(except the entityType) of entity's attributes after dropping on canvas
- make sure to save changes after updating input fields 
- you can also remove the entity from the workflow by clicking on the remove button 
- click on download workflow button at the bottom right to download workflow in json format.
- clicking this button pops up an input modal which accepts prefered filename
- click download to proceed.
- you can also use the clear workflow button to clear the entire canvas and prepare for a new workflow.

## Note
An entity can only be present once in a workflow.