import { ListParams, ListReponse, Student } from '../models';
import axiosClient from './axiosClient';

const studentApi = {
    getAll(params: ListParams): Promise<ListReponse<Student>> {
        const url = '/students';
        return axiosClient.get(url, { params });
    },

    getById(id: String): Promise<Student> {
        const url = `/students/${id}`;
        return axiosClient.get(url);
    },

    add(data: Student): Promise<Student> {
        const url = '/students';
        return axiosClient.post(url, data);
    },

    update(data: Student): Promise<Student> {
        const url = '/students';
        return axiosClient.patch(url, data);
    },

    remove(id: string): Promise<any> {
        const url = `/students/${id}`;
        return axiosClient.delete(url);
    },
};
export default studentApi;
