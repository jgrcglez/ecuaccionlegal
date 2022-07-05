import React from 'react';
import ContactInfo from "../components/ContactInfo";
import Menu from "../components/Menu";

const BlogPage = () => {
    return (
        <>
            <ContactInfo/>
            <Menu activeItem={3}/>
            <h1>BLOG</h1>
        </>
    );
}

export default BlogPage;