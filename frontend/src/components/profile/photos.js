import PropTypes from "prop-types";
import Skeleton from "react-loading-skeleton";
import { useHistory } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import { deleteImageById } from "../../services/firebase";
import UserContext from "../../context/user";
import { useContext } from "react";

export default function Photos({ photos, user }) {
  const history = useHistory();
  const userEmail = useContext(UserContext);
  const handleDelete = (photo) => {
    deleteImageById(photo.docId);
    history.push("/");
  };

  return (
    <div className="h-16 border-t border-gray-primary mt-12 pt-4">
      {user.emailAddress === userEmail.user.email ? (
        <div className={"text-center mt-3 mb-3"}>
          <button
            onClick={() => history.push(ROUTES.ADDPOST)}
            className={`bg-blue-medium text-white text-center py-1 px-2 rounded h-8 font-bold`}
          >
            Add Post
          </button>
        </div>
      ) : null}
      <div className="grid grid-cols-3 gap-8 mt-4 mb-12">
        {!photos
          ? new Array(12)
              .fill(0)
              .map((_, i) => <Skeleton key={i} width={320} height={400} />)
          : photos.length > 0
          ? photos.map((photo) => (
              <div key={photo.docId}>
                {user.emailAddress === userEmail.user.email ? (
                  <div>
                    <button
                      onClick={() => handleDelete(photo)}
                      className="bg-blue-medium p-1 text-white m-2 rounded h-8 font-bold"
                    >
                      Delete Post
                    </button>
                  </div>
                ) : null}

                <div className="relative group">
                  <img
                    className="w-60"
                    src={photo.imageSrc}
                    alt={photo.caption}
                  />
                  <div className="absolute bottom-0 left-0 bg-gray-150 z-10 items-center w-60  justify-evenly h-full bg-black-faded group-hover:flex hidden">
                    <p className="flex items-center text-white font-bold">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-8 mr-4"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {photo.likes.length}
                    </p>

                    <p className="flex items-center text-white font-bold">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-8 mr-4"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {photo.comments.length}
                    </p>
                  </div>
                </div>
              </div>
            ))
          : null}
      </div>

      {!photos ||
        (photos.length === 0 && (
          <p className="text-center text-2xl">No Posts Yet</p>
        ))}
    </div>
  );
}

Photos.propTypes = {
  photos: PropTypes.array,
  user: PropTypes.shape({
    dateCreated: PropTypes.number,
    emailAddress: PropTypes.string,
    followers: PropTypes.array,
    following: PropTypes.array,
    fullName: PropTypes.string,
    userId: PropTypes.string,
    username: PropTypes.string,
  }),
};
