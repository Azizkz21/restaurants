import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IDLE, PENDING, REJECTED } from "../../../constats/constats";
import {
  selectUsersById,
  selectUsersRequestStatus,
} from "../../../redux/users";
import { getUsers } from "../../../redux/users/get-users";

export const UsersReview = ({ userId }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers(userId));
  }, [dispatch, userId]);

  const user = useSelector((state) => selectUsersById(state, userId));

  const requestStatus = useSelector(selectUsersRequestStatus);

  if (requestStatus === IDLE || requestStatus === PENDING) {
    return "Loading...";
  }

  if (requestStatus === REJECTED) {
    return <div>Error</div>;
  }

  return <h3>{user.name}</h3>;
};
