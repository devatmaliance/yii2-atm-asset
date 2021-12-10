$(document).on('select2:open', function () {
    try {
        let searchInput = $('input.select2-search__field')[0] ?? null;

        if (undefined === searchInput || null === searchInput) {
            return;
        }

        searchInput.focus();
    } catch (error) {
        console.log(error.message);
    }
});