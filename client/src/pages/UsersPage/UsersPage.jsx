import UsersTable from "../../components/UsersTable/UsersTable";
import styles from "./UsersPage.module.css";

const UsersPage = () => {
    const allUsers = [
        {
            id: "m9sm92wao",
            firstname: "Ariel",
            lastname: "Asraf",
            email: "arielassraf@gmail.com",
            sessionTimeout: "44m",
            moviesPermissions: ['View', 'Create', 'Edit', 'Delete'],
            subscriptionsPermissions: ['View', 'Create', 'Edit'],
            createdDate: "March 11, 2019"
        },
        {
            id: "mozm03d30",
            firstname: "Roni",
            lastname: "Cohen",
            email: "ronicohen15@gmail.com",
            sessionTimeout: "2h",
            moviesPermissions: ['View', 'Create', 'Edit'],
            subscriptionsPermissions: ['View'],
            createdDate: "December 27, 2022"
        },
        {
            id: "mtsxonir89",
            firstname: "Amir",
            lastname: "Lavi",
            email: "amirLavi98@gmail.com",
            sessionTimeout: "35m",
            moviesPermissions: ['View', 'Edit'],
            subscriptionsPermissions: ['View', 'Create', 'Edit'],
            createdDate: "April 9, 2018"
        },
        {
            id: "mnxiune83",
            firstname: "Ortal",
            lastname: "Biton",
            email: "ortalbiton@gmail.com",
            sessionTimeout: "3h",
            moviesPermissions: ['View'],
            subscriptionsPermissions: ['View', 'Create'],
            createdDate: "May 19, 2020"
        },
        {
            id: "mtsxonir84",
            firstname: "Meir",
            lastname: "Revivo",
            email: "meirevivo@gmail.com",
            sessionTimeout: "50m",
            moviesPermissions: ['View', 'Create', 'Edit'],
            subscriptionsPermissions: ['View','Edit'],
            createdDate: "June 2, 2017"
        },
        {
            id: "moieowo837",
            firstname: "Pavel",
            lastname: "Casamiro",
            email: "pavlocas@gmail.com",
            sessionTimeout: "1.5h",
            moviesPermissions: ['View', 'Create', 'Edit', 'Delete'],
            subscriptionsPermissions: ['View','Edit', 'Create'],
            createdDate: "July 11, 2023"
        },
        {
            id: "mencb26d",
            firstname: "Nir",
            lastname: "Amar",
            email: "niramar@gmail.com",
            sessionTimeout: "1h",
            moviesPermissions: ['View'],
            subscriptionsPermissions: ['View','Edit', 'Create', 'Delete'],
            createdDate: "September 30, 2023"
        }
    ];
    return(
        <div className={styles.usersPage}>
            <UsersTable users={allUsers} />
        </div>
    );
};

export default UsersPage;