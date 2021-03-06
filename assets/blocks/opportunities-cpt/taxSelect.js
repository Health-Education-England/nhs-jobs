const { __ } = wp.i18n;
const { withSelect } = wp.data;
const { SelectControl } = wp.components;
const { compose, withState } = wp.compose;
const { dispatch } = wp.data;

const NHSTaxSelect = ( { parentTerms, parentAttribute, parentAttrName, parentLabel, childAttribute, childTerms, childAttrName, childLabel, block, currentPost, term } ) => {


	const updateTaxonomy = ( select, attribute, relationship )=>{

		// Clears Child Block atts if parent block changed

		if( attribute === parentAttrName ){

			dispatch( 'core/block-editor' ).updateBlockAttributes( 
				block.clientId, 
				{ [ childAttrName ]: '' } 
			);

		}

		// updates block attribites

		dispatch( 'core/block-editor' ).updateBlockAttributes( block.clientId, { [ attribute ]: select } );

		// checks whether this is a parent or child taxonomy
		// If it is a child category make sure both parent and child category are updated to be selected
		
		let termIds = relationship ? [ parseInt( select ) ] : [ parseInt( select ), parseInt( parentAttribute ) ];		

		dispatch( 'core' ).editEntityRecord( 'postType', currentPost.type, currentPost.id, { [ term ]: termIds } );

	}

	const parentSelect = ( parentTerms ) =>{

		if( parentTerms ){
		
			let selectItem = [ { label: 'Select ' +  parentLabel, value: 0 } ];

			parentTerms.map((term, index) => {
		        selectItem.push( { label: term.name, value: term.id } )
		     })

			return selectItem;
		}else{
			return[];
		}
	}



	const childSelect = ( childTerms ) =>{

		if( childTerms ){

			let selectItem = [ { label: 'Select ' +  childLabel, value: 0 } ];

			childTerms.map((term, index) => {
		        selectItem.push( { label: term.name, value: term.id } )
		    })

			return selectItem;

		}else{
			return [];
		}
	}


	return(

	<div>

		<SelectControl
	        label={ parentLabel }
	        value={ parentAttribute }
	        options={ 
				parentSelect( parentTerms )
	        	}
	        onChange={ ( select ) => { updateTaxonomy( select, parentAttrName, true ) } }
	    />

	    {
	    	childSelect && (

	    		<SelectControl
			        label={ childLabel }
			        value={ childAttribute }
			        options={ 
						childSelect( childTerms )
			        }
			        onChange={ ( select ) => { updateTaxonomy( select, childAttrName, false ) } }
			    />
	    	)
	    }

	    


	</div>

)};

export default withSelect( ( select, ownProps ) => { 

		let parent_query = {
			'parent'     : 0,
			'hide_empty' : false,
			'per_page'   : -1
		}

		let child_query = {
			'parent'     : ownProps.parentAttribute,
			'hide_empty' : false,
			'per_page'   : -1
		}

		let parentTerms = ownProps.term ? select('core').getEntityRecords('taxonomy', ownProps.term, parent_query ) : '';

		let childTerms = ownProps.childAttrName ? select('core').getEntityRecords('taxonomy', ownProps.term, child_query ) : false;

		return {
			parentTerms: parentTerms,
			childTerms: childTerms,
			block: select("core/block-editor").getSelectedBlock(),
			currentPost: select( 'core/editor' ).getCurrentPost(),
			ownProps: ownProps
		}
})(NHSTaxSelect);