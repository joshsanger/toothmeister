import App from './app.es6';

/**
 * T A B L E   O F   C O N T E N T S
 *
 * @author      Joshua Sanger
 * @version     1.0
 *
 * 01. ON LOAD
 * 02. ASSIGN FUNCTIONS
 */

const app = new App();


$(window).on('load', function() {

    /**
     * 01. ON LOAD
     * Function to run on load
     */

    // update the masonry layout based on screen size (destroy / create)
    $(window).on('resize', function() {
        app.update_masonry();
    });

    // fetch the feed
    app.fetch_feed();

    // trigger resize for masonry layout fix
    setTimeout(() => {
        $(window).trigger('resize');
    }, 500);
});


$(document).ready(function() {

    /**
     * 02. ASSIGN FUNCTIONS
     * Runs / assigns functions when the document is ready.
     */

    // prevent forms from submitting (to use ajax calls instead)
    $('form').on('submit', function(e) {
        e.preventDefault();
    });

    // open modal
    $('.open-search').on('click', function() {
       app.open_searchModal();
    });

    // close modal
    $('.close-search').on('click', function() {
        app.close_searchModal();
    });

    // close modal on escape
    $(document).on('keyup', function(e) {
        if (e.keyCode == 27 && $('.search-modal').hasClass('active')) {
            app.close_searchModal();
        } else if (e.keyCode == 27 && $('.also-mobile').hasClass('active')) {
            app.close_mobileMenu();
        }
    });

    // allow user to submit form
    $('#search').on('input', function() {
        $('#submit-search').prop('disabled', !$(this).val().trim().length);
    });

    // open mobile menu
    $('.mobile-menu-trigger').on('click', function() {
        app.open_mobileMenu();
    });

    // close mobile menu
    $('.mobile-menu-overlay').on('click', function() {
        app.close_mobileMenu();
    });

    // toggle filters content
    $('.filters-title span').on('click', function() {
        app.toggle_filters($(this));
    });


    // close mobile menu if screen is resize to > 1024
    $(window).on('resize', function() {
        if (window.innerWidth > 1024 && $('body').find('.also-mobile').hasClass('active')) {
            app.close_mobileMenu();
        }
    });

    $(window).on('touchmove', function() {

        // ipad fix for mobile menu
        if ($('.also-mobile').hasClass('active') && window.innerWidth <= 1024 && window.innerWidth >= 768) {
            app.close_mobileMenu();
        }
    });

    $(window).trigger('resize');

});