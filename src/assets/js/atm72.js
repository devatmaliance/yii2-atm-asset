$(document).on('select2:open', function (e) {
    try {
        const selectId = e.target.id
        let searchField = $(".select2-search__field[aria-controls='select2-" + selectId + "-results']")[0];

        if (searchField === undefined || searchField === null) {
            return;
        }

        searchField.focus();
    } catch (error) {
        console.log(error.message);
    }
});