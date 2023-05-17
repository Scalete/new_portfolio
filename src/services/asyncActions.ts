import axios from 'axios';

export async function getAllWorks() {
    try {
        const response = await axios.get(`${process.env.API_BASE_URL}/works`);
        return response.data;
    } catch (error) {
        console.error('Error fetching all works:', error);
    }
}

export async function getAllBlogs() {
    try {
        const response = await axios.get(`${process.env.API_BASE_URL}/blogs`);
        return response.data;
    } catch (error) {
        console.error('Error fetching all blogs:', error);
    }
}

export async function getWorkById(_id: string) {
    try {
        const response = await axios.get(`${process.env.API_BASE_URL}/works/${_id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching work:', error);
    }
}

export async function getBlogById(_id: string) {
    try {
        const response = await axios.get(`${process.env.API_BASE_URL}/blogs/${_id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching blog:', error);
    }
}

export async function getRankedWorks() {
    try {
        const response = await axios.get(`${process.env.API_BASE_URL}/works/ranked`);
        return response.data;
    } catch (error) {
        console.error('Error fetching ranked works:', error);
    }
}