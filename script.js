function convertAndDownload() {
      var imageInput = document.getElementById('imageInput');
      var formatSelect = document.getElementById('formatSelect');
      var resultElement = document.getElementById('result');

      // Check if an image is selected
      if (imageInput.files.length > 0) {
        var selectedFormat = formatSelect.value;
        var imageName = imageInput.files[0].name;

        // Simulate conversion using Canvas API (replace this with actual conversion logic)
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        var img = new Image();
        img.src = URL.createObjectURL(imageInput.files[0]);

        img.onload = function() {
          canvas.width = img.width;
          canvas.height = img.height;
          ctx.drawImage(img, 0, 0);

          // Convert canvas to data URL based on selected format
          var dataURL;
          if (selectedFormat === 'raw') {
            dataURL = canvas.toDataURL();
          } else if (selectedFormat === 'png') {
            dataURL = canvas.toDataURL('image/png');
          } else if (selectedFormat === 'jpg') {
            dataURL = canvas.toDataURL('image/jpeg');
          } else if (selectedFormat === 'pdf') {
            // Convert to PDF (replace this with actual PDF conversion logic)
            // For demonstration purposes, just display a message
            resultElement.innerText = 'PDF conversion not implemented in this example.';
            return;
          }

          // Create a download link and trigger the download
          var a = document.createElement('a');
          a.href = dataURL;
          a.download = `converted_${imageName}.${selectedFormat}`;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);

          // Display success message
          resultElement.innerText = `Image '${imageName}' converted to ${selectedFormat.toUpperCase()} and downloaded successfully.`;
        };
      } else {
        resultElement.innerText = 'Please select an image.';
      }
    }
