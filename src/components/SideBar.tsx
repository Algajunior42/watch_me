import { Button } from "./Button";
import { GenreResponseProps } from "../App";


interface SidebarProps {
  handleClickButton: (id: number) => void;
  selectedGenreId: number;
  genres: GenreResponseProps[];
}

export function SideBar(props: SidebarProps) {
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {props.genres.map(genre => (
          <Button
            id={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => props.handleClickButton(genre.id)}
            selected={props.selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}