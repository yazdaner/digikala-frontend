export const getUpdateUrl = function (item) {
    if (this.props.editUrl === undefined) {
        return "/" + this.props.route + "/" + item.id + "/edit";
    } else {
        return this.props.editUrl.toString().replace(":id", item.id);
    }
};

export const getDeleteUrl = function (item) {
    return useRuntimeConfig().public.api + "/" + this.props.route + "/" + item.id;
};

export const getRestoreUrl = function (item) {
    return (
        useRuntimeConfig().public.api +
        "/" +
        this.props.route +
        "/" +
        item.id +
        "/restore"
    );
};
