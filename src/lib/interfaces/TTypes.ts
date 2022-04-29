export enum EType {
    success = "success",
    danger = "danger",
    info = "info",
    warning = "warning",
    alert = "alert",
    default = "default",
    light = "light",
    dark = "dark",
    primary = "primary",
    secondary = "secondary"
}

export type TType = keyof (typeof EType);
