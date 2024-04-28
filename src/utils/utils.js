export const logout = (navigate) => {
    sessionStorage.clear();
    navigate("/");
};


export const getQueryParams = (searhParams) => {
    const params = new URLSearchParams(searhParams);
    return Object.fromEntries(params);
}