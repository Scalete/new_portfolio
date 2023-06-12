// Return all works
export async function getAllWorks() {
    try {
        const response = await fetch(`${process.env.API_BASE_URL}/works`, { next: { revalidate: 60 } });
        return response.json();
    } catch (error) {
        console.error('Error fetching all works:', error);
    }
}

// Return all blogs
export async function getAllBlogs() {
    try {
        const response = await fetch(`${process.env.API_BASE_URL}/blogs`, { next: { revalidate: 60 } });
        return response.json();
    } catch (error) {
        console.error('Error fetching all blogs:', error);
    }
}

// Return one work by id
export async function getWorkById(_id: string) {
    try {
        const response = await fetch(`${process.env.API_BASE_URL}/works/${_id}`, { next: { revalidate: 60 } });
        return response.json();
    } catch (error) {
        console.error('Error fetching work:', error);
    }
}

// Return one blog by id
export async function getBlogById(_id: string) {
    try {
        const response = await fetch(`${process.env.API_BASE_URL}/blogs/${_id}`, { next: { revalidate: 60 } });
        return response.json();
    } catch (error) {
        console.error('Error fetching blog:', error);
    }
}

//Return three works by rank
export async function getRankedWorks() {
    try {
        const response = await fetch(`${process.env.API_BASE_URL}/works/ranked`, { next: { revalidate: 60 } });
        return response.json();
    } catch (error) {
        console.error('Error fetching ranked works:', error);
    }
}

//Return recent two blogs, also filter them by date
export async function getRecentBlogs() {
    try {
        const response = await fetch(`${process.env.API_BASE_URL}/blogs/recent/two`, { next: { revalidate: 60 } });
        return response.json();
    } catch (error) {
        console.error('Error fetching recent blogs:', error);
    }
}