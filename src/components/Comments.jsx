import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from "./Comments.module.css";
export function Comment({content}) {
  return (
    <div className={styles.comment}>
      <Avatar
      hasBorder={false}
      src="https://www.github.com/oyaksaile.png"
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Kayo Elias</strong>
              <time
                title="11 de Maio as 08:13:38"
                dateTime="2022-05-11 08:13:38"
              >
                Cerca de 1h Atrás
              </time>
            </div>

            <button title="Deletar Comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}