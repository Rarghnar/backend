import { Admin} from "../../models/admin.model";
import adminSchema from "./admin.schema";

async function getAdmin(): Promise<Admin[]>{
    return adminSchema.find(); //mostrar todo
}

async function getAdminById(id: string): Promise<Admin | null>{
    return adminSchema.findOne({ _id: id });
}

async function addAdmin(admin: Admin): Promise<Admin>{    
    return adminSchema.create<Admin>(admin);
}

async function deleteAdmin(id: string) {
    return adminSchema.remove({ _id: id });
}

async function patchAdmin(_id: string, admin: Partial<Admin>): Promise<Partial<Admin | null>>{
    return adminSchema.findByIdAndUpdate(_id, admin);
}

export default { addAdmin , getAdmin, getAdminById, deleteAdmin, patchAdmin};