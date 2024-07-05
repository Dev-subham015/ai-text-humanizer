document.addEventListener("DOMContentLoaded", function() {
            const form = document.getElementById("text_form");
            form.addEventListener("submit", function(event) {
                event.preventDefault();
                
                // Perform AJAX request or form submission logic
                fetch(form.action, {
                    method: "POST",
                    body: new FormData(form),
                })
                .then(response => response.text())
                .then(html => {
                    // Update the page with the response content
                    document.documentElement.innerHTML = html;

                    // Scroll to the output text element
                    const outputText = document.getElementById("output_text");
                    if (outputText) {
                        outputText.scrollIntoView({ behavior: "smooth" });
                    }
                });
            });
        });
        
        
 function pasteText() {
            navigator.clipboard.readText().then(text => {
                document.querySelector('textarea[name="input_text"]').value = text;
            });
        }

        function copyText() {
            const outputText = document.getElementById('output_text');
            outputText.select();
            document.execCommand('copy');
            document.getElementById('copied-success').style.display = 'block';
            setTimeout(() => {
                document.getElementById('copied-success').style.display = 'none';
            }, 2000);
        }       
        
        
        