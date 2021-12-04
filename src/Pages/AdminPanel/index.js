import AdminHeader from "../../Components/AdminHeader";
import AdminSidebar from "../../Components/AdminSidebar";
import AdmCRUD from "../../Components/AdmCRUD";

const AdminPanel = () => {
    return (
        <>
            <AdminSidebar/>
            <AdminHeader/>
            <AdmCRUD/>
        </>
    );
}

export default AdminPanel
