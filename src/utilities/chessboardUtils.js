export const shouldChessboardDisappear = (pathname, scrollY) => {
    const adminPaths = [
        "/admin", "/admin/champions", "/admin/referees", "/admin/clubs",
        "/admin/comity", "/admin/articles", "/admin/results",
        "/admin/regulation", "/admin/admins"
    ];

    const isAdminPath = adminPaths.includes(pathname);
    const isScrolled = scrollY >= 100;

    return isAdminPath || isScrolled;
};