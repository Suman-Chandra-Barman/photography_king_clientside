import React from "react";
import useTitle from "../../hooks/useTitle";

const Blog = () => {
  useTitle("Blog");
  return (
    <div className="lg:w-2/3 mx-auto mt-10 relative">
      <h2 className="text-center text-3xl my-5">
        Important interview questions
      </h2>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          1.Difference between SQL and NoSQL?
        </div>
        <div className="collapse-content">
          <p>
            SQL databases are vertically scalable, while NoSQL databases are
            horizontally scalable. SQL databases are table-based, while NoSQL
            databases are document, key-value, graph, or wide-column stores. SQL
            databases are better for multi-row transactions, while NoSQL is
            better for unstructured data like documents or JSON.
          </p>
        </div>
      </div>

      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-4"
      >
        <div className="collapse-title text-xl font-medium">
          2. What is JWT, and how does it work?
        </div>
        <div className="collapse-content">
          <p>
            What is JWT (JSON Web Token)? JSON Web Token (JWT) is an open
            standard (RFC 7519) for securely transmitting information between
            parties as JSON object. It is compact, readable and digitally signed
            using a private key/ or a public key pair by the Identity
            Provider(IdP).
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-4"
      >
        <div className="collapse-title text-xl font-medium">
          3. What is the difference between javascript and NodeJS?
        </div>
        <div className="collapse-content">
          <p>
            JavaScript is a simple programming language that can be used with
            any browser that has the JavaScript Engine installed. Node. js, on
            the other hand, is an interpreter or execution environment for the
            JavaScript programming language.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-4"
      >
        <div className="collapse-title text-xl font-medium">
          4. How does NodeJS handle multiple requests at the same time?
        </div>
        <div className="collapse-content">
          <p>
            How NodeJS handle multiple client requests? NodeJS receives multiple
            client requests and places them into EventQueue. NodeJS is built
            with the concept of event-driven architecture. NodeJS has its own
            EventLoop which is an infinite loop that receives requests and
            processes them.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
