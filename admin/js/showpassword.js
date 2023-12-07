
   function togglePasswordVisibility() {
       var passwordField = document.querySelector('input[name="password"]');
       if (passwordField.type === 'password') {
           passwordField.type = 'text';
       } else {
           passwordField.type = 'password';
       }
   }

