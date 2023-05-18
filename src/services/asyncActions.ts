import axios from 'axios';

// Return all works
export async function getAllWorks() {
    try {
        const response = await axios.get(`${process.env.API_BASE_URL}/works`);
        return response.data;
    } catch (error) {
        console.error('Error fetching all works:', error);
    }
}

// Return all blogs
export async function getAllBlogs() {
    try {
        const response = await axios.get(`${process.env.API_BASE_URL}/blogs`);
        return response.data;
    } catch (error) {
        console.error('Error fetching all blogs:', error);
    }
}

// Return one work by id
export async function getWorkById(_id: string) {
    try {
        const response = await axios.get(`${process.env.API_BASE_URL}/works/${_id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching work:', error);
    }
}

// Return one blog by id
export async function getBlogById(_id: string) {
    try {
        const response = await axios.get(`${process.env.API_BASE_URL}/blogs/${_id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching blog:', error);
    }
}

//Return three works by rank
export async function getRankedWorks() {
    try {
        const response = await axios.get(`${process.env.API_BASE_URL}/works/ranked`);
        return response.data;
    } catch (error) {
        console.error('Error fetching ranked works:', error);
    }
}

//Return recent two blogs, also filter them by date
export async function getRecentBlogs() {
    try {
        const response = await axios.get(`${process.env.API_BASE_URL}/blogs/recent/two`);
        return response.data;
    } catch (error) {
        console.error('Error fetching recent blogs:', error);
    }
}