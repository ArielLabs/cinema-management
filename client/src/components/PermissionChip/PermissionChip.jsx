import styles from "./PermissionChip.module.css";

const PermissionChip = (prop) => {
    const { content } = prop;

    let backgroundContent = "#fb8d96";
    if(content === "View"){
        backgroundContent = "#0feb81";
    }else if(content === "Create"){
        backgroundContent = "#4d6af6";
    }else if(content === "Edit"){
        backgroundContent = "#eab308";
    }

    return(
        <div className={styles.permissionChip} style={{backgroundColor: backgroundContent}}>{content}</div>
    );
};

export default PermissionChip;