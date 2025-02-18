import React from "react";
import "../styles/url_list.css";

const Urls = () => {
    return (
    <div className="flex justify-center">
      <table className="mr-32 ml-32 mt-8">
        <thead className="">
          <tr>
            <th className="text-3xl py-4 px-4 text-white">Old URL</th>
            <th className="text-3xl py-4 px-4 text-white">New URL</th>
            <th className="text-3xl py-4 px-4 text-white">Actions</th>
          </tr>
        </thead>
        <tbody>
            <tr >
              <td className="py-2 px-4 text-2xl font-semibold truncate max-w-xs text-white">http://localhost:3000/urlshttp://localhost:3000/urls</td>
              <td className="py-2 px-4 text-2xl font-semibold truncate max-w-xs text-white">http://localhost:3000/urlshttp://localhost:3000/urls</td>
              <td className="py-2 px-4 flex justify-center text-white">
                <button className="edit-button text-2xl px-8 py-4">Edit</button>
                <button className="delete-button text-2xl px-8 py-4">Delete</button>
              </td>
            </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Urls;