// insert Alpine into head with defer
$('head').append(
  $(
    '<script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>'
  )[0]
);

document.addEventListener('alpine:init', () => {
  Alpine.data('boxMultiSelect', () => ({
    items: [],

    checkOrigin(index) {
      document.querySelectorAll('.da-field-checkboxes input')[index].checked =
        !document.querySelectorAll('.da-field-checkboxes input')[index].checked;
    },

    init() {
      document.querySelector('.dafieldpart').classList.add('visually-hidden');
      let _optList = [];
      document
        .querySelectorAll('.da-field-checkboxes label')
        .forEach((el, index) => {
          _optList.push({
            label: el
              .querySelector('span.labelauty-unchecked')
              .innerText.trim(),
            img: el.querySelector('span.labelauty-unchecked > img').src,
            index: index,
          });
        });
      this.items = _optList;
    },
    replaceImgToSvg(el) {
      $.get(
        el.src,
        function (data, status) {
          if (status == 'success') {
            let svgEl = $(data).find('svg');
            el.replaceWith(svgEl[0]);
          }
        },
        'xml'
      );
    },
  }));
});
