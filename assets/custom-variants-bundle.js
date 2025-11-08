document.addEventListener('DOMContentLoaded', function () {
  const variantRadios = document.querySelectorAll('.variant-radio');
  const productForm = document.querySelector('.shopify-product-form');
  
  variantRadios.forEach(radio => {
    radio.addEventListener('change', function () {
      if (this.checked) {
        productForm.querySelector('.product-id').value = this.value;
      }
    });
  });
});
