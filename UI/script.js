$(document).ready(function() {
  $('#scan-form').submit(function(event) {
    event.preventDefault();
    console.log("sdfdfsdfdsfdsdfsfsdfsdfsddfs")
    // Get input values
    var formData = {
	'ip_address': $('#ip-address').val(),
	'port_range': $('#port-range').val(),
	'scan_type': $('#scan-type').val(),
    }


    // send AJAX request to API endpoint
    // $.ajax({
    //   type: 'POST',
    //   url: 'http://localhost:8000/nmap-scan/',
    //   data: JSON.stringify(formData),
    //   contentType: 'application/json',
    //   dataType : 'jsonp',   //you may use jsonp for cross origin request
    //   crossDomain:true,
    //   success: function(data) {
    //     // Display scan results in container element
    //     alert('###################');
    //     console.log('Scan-results:', data);
    //     $('#output-text').html(data);
    //   },
    //   error: function(xhr, status, error) {
    //     alert('Error retrieving scan results.');
    //   }
    // });


    fetch("http://localhost:8000/nmap-scan/", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
                })
                
                .then(response => response.json())
                .then(response => {

                  console.log("testdcfdsfdvf"+response)
                    $("#output-text").val(JSON.stringify(response));
                
                 })

    

  });
});
