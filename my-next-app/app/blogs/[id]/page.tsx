

const Blog1 = async ({ params }) => {
    return (
        <div>
            <h1>Blog {params.id}</h1>
            <p>This is the content of Blog 1.</p>
        </div>
    );
};

export default Blog1;

