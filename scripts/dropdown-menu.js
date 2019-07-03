var sidebar_dropdown = function() {
    if($(".main-sidebar").length) {
      $(".main-sidebar").niceScroll(sidebar_nicescroll_opts);
      sidebar_nicescroll = $(".main-sidebar").getNiceScroll();

      $(".main-sidebar .sidebar-menu li a.has-dropdown").off('click').on('click', function() {
        var me = $(this);

        me.parent().find('> .dropdown-menu').slideToggle(500, function() {
          update_sidebar_nicescroll();
          return false;
        });
        return false;
      });
    }
  }
sidebar_dropdown();