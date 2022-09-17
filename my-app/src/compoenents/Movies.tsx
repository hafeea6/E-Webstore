import AddMovie from "./AddMovie";
import EditMovie from "./EditMovie";
import ListMovies from "./ListMovies";

export const Movies = () => {
  return (
    <div>
      <ListMovies />
      <AddMovie />
      <EditMovie />
    </div>
  );
};
