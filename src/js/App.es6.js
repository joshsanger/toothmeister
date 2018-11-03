/**
 * T A B L E   O F   C O N T E N T S
 *
 * @author      Joshua Sanger
 * @version     1.0
 *
 * 01.    CLASS SET UP
 * 01.01. OPEN SEARCH MODAL
 * 01.02. CLOSE SEARCH MODAL
 * 01.03. OPEN MOBILE MENU
 * 01.04. CLOSE MOBILE MENU
 * 01.05. TOGGLE FILTERS
 * 01.06. UPDATE MASONRY
 * 01.07. FETCH FEED
 * 01.08. ANIMATE PROGRESS BAR
 */

export default class App {


    /**
     * 01. CLASS SET UP
     * Sets up the app class
     */
    constructor() {

        this.masonry;
        this.transitionTime    = 200;
        this.searchModal       = $('.search-modal');
        this.mobileMenu        = $('.also-mobile');
        this.mobileMenuOverlay = $('.mobile-menu-overlay');
        this.progress          = {
            elem             : $('.loading-modal .fill'),
            interval         : false,
            animationInterval: 300,
            progressAmount   : 0,
            iteration        : 0,
            maxIterations    : 10,
            maxAmount        : 90
        }
    }


    /**
     * 01.01. OPEN SEARCH MODAL
     * Opens the search modal
     */
    open_searchModal() {

        if (!this.searchModal.hasClass('active')) {

            $('body').addClass('fixed');
            this.searchModal.addClass('active');

            setTimeout(() => {
                $('#search').focus();
            }, 600);
        }
    }


    /**
     * 01.02. CLOSE SEARCH MODAL
     * Closes the search modal
     */
    close_searchModal() {

        if (this.searchModal.hasClass('active')) {
            $('body').removeClass('fixed');
            this.searchModal.removeClass('active');
            $(':focus').blur();
        }
    }


    /**
     * 01.03. OPEN MOBILE MENU
     * Opens the mobile menu if the screen is < 1024px
     */
    open_mobileMenu() {

        if (window.innerWidth <= 1024 && !this.mobileMenu.hasClass('active')) {
            this.mobileMenu.addClass('active');
            this.mobileMenuOverlay.addClass('active');
            $('body').addClass('fixed');
        }
    }


    /**
     * 01.04. CLOSE MOBILE MENU
     * Closes the mobile menu
     */
    close_mobileMenu() {

        if (window.innerWidth <= 1024 && this.mobileMenu.hasClass('active')) {
            this.mobileMenu.removeClass('active');
            this.mobileMenuOverlay.removeClass('active');
            $('body').removeClass('fixed');
        }
    }

    /**
     * 01.05. TOGGLE FILTERS
     * Toggles the filters (expand / collapse)
     *
     * @oaram       elem        element     The jquery element that was clicked
     */
    toggle_filters(elem = $('.filters-title span')) {

        const control = elem;
        const content = control.parents('.filters-title').next('.filters-content');

        if (control.hasClass('active')) {

            control.removeClass('active');
            content.slideUp(this.transitionTime, function() {
                $(this).removeAttr('style').removeClass('active');
            });
        } else {

            control.addClass('active');
            content.slideDown(this.transitionTime, function() {
                $(this).addClass('active');
            });
        }
    }


    /**
     * 01.06. UPDATE MASONRY
     * Updated the masonry layout (disables on smaller size, enables on bigger sizes)
     */
    update_masonry() {

        const w          = window.innerWidth;
        const breakpoint = 420;

        if ($('body').hasClass('masonry-init') && w <= breakpoint) {

            this.masonry.masonry('destroy');
            $('body').removeClass('masonry-init');
        } else if (!$('body').hasClass('masonry-init') && w > breakpoint) {

            this.masonry = $('.grid').masonry({
                columnWidth : 350,
                fitWidth    : true,
                gutter      : 30,
                itemSelector: '.grid-item',
            });

            $('body').addClass('masonry-init');
            this.masonry.masonry();
        }
    }


    /**
     * 01.07. FETCH FEED
     * Temporary function that would be replaced with an api / sever call to fetch feed.
     */
    fetch_feed() {

        this.progress.interval = setInterval(() => {
            this.animate_progressBar();
        }, this.progress.animationInterval);

        this.animate_progressBar();
    }


    /**
     * 01.08. ANIMATE PROGRESS BAR
     * Temporary function to simulate the progress bar moving.
     */
    animate_progressBar() {

        // make sure teh progress bar does not exceed the max amount
        if (this.progress.progressAmount <= this.progress.maxAmount) {

            let amountLeft               = this.progress.maxAmount - this.progress.progressAmount;
            let iterationsLeft           = this.progress.maxIterations - this.progress.iteration;
            let amountToMove             =+ ((Math.random() * (amountLeft / iterationsLeft)).toFixed(2));
            this.progress.progressAmount =+ ((this.progress.progressAmount + amountToMove).toFixed(2));
            this.progress.iteration++;
        }

        this.progress.elem.css('width', this.progress.progressAmount + '%');

        // finish the loader when the number of iterations is reached
        if (this.progress.iteration == this.progress.maxIterations) {

            clearInterval(this.progress.interval);
            this.progress.elem.css('width', '100%');
            setTimeout(() => {
                $('.loading-modal').fadeOut(this.transitionTime);
                $('body').removeClass('loading').addClass('loaded');
            }, 300);
        }
    }
}