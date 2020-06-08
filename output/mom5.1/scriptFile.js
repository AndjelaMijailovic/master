$(document).ready(function () {
	var counter = 0;
		tippy('[data-tippy-content]');
		var table = $('#annotationTable').DataTable({
			//serverSide: 'true',
			//ajax: 'array.json',
				//deferRender: true,
				columnDefs: [ {
					orderable: false,
					className: 'select-checkbox',
					targets:   0,
					checkboxes: {
						'selectRow': true
					}
				}
				//,
				//{
					//width: '15%',
					//targets: -2
				//}
				],
				select: {
					style:    'multi',
					//selector: 'td:first-child'
				},
				order: [[ 1, 'asc' ]]
			} );

		
		//var waiting = $('#dialogWait').dialog({});

		//change selected rows
		$('#rowsNumber').on('change', function() {
			debugger;
			var selected = this.value;
			//$('.dt-checkboxes-select-all').prop('checked', false);
			//table.rows({ selected: true, search: 'applied' }).count(); // get total count of selected rows
			//var rows_selected = table.column(0).checkboxes.selected();
		
			//table.rows().deselect();
			var rows = table.$('.dt-checkboxes')
			rows.slice(0,selected).prop('checked', true);
			rows.slice(selected).prop('checked', false);
			counter = selected;
			
		});
		
		//change select show XY  functions
		$('#showXFunctions').on('change', function() {
			var val = this.value;
			//$('#dialogWait').open();
			if (val == "all")
			{	$("td:has(a)", table.rows().nodes()).children().each( function (i, value) {
					$(this)[0].style.display="inline";
				});
				return true;
			}
			
			//tableElements
			//table.fnGetNodes when constructor is dataTable
			$("td:has(a)",  table.rows().nodes()).each( function (i, value) {

				$(this).children().each(function (j, valuee){
					if (j >= val)
						valuee.style.display="none";
					else
						valuee.style.display = "inline";
				});	
			});
			//$('#dialogWait').close();
		});
		//$('#annotationTable').DataTable();
		//alert("its ready");
		
		//$('[data-toggle="tooltip"]').tooltip();
		//tippy(document.querySelectorAll('[data-tippy-content]'));
		//tippy('[data-tippy-content]');
		//tippy(table.$('[data-tippy-content]'));
		//tippy(table.('[data-tippy-content]'));

});

function exportCSV() {
		
	alert("Download. . . and nothing :/");
}