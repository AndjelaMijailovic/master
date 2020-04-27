$(document).ready(function () {
	
		var table = $('#annotationTable').DataTable();
		
		//var waiting = $('#dialogWait').dialog({});


		//change select show XY  functions
		$('#showXFunctions').on('change', function() {
			var val = this.value;
			//$('#dialogWait').open();
			if (val == "")
			{	$("td:has(a)", table.rows().nodes()).children().each( function (i, value) {
					$(this)[0].style.display="inline";
				});
				return true;
			}
			
			//tableElements
			//table.fnGetNodes when constructor is dataTable
			$("td:has(a)",  table.rows().nodes()).each( function (i, value) {
				debugger;
				if (val == "")
				{
					return false;
				}
					
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
});