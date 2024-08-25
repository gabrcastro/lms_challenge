import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import clsx from "clsx";
import { useState } from "react";
import { CommentComponent, CommentProps } from "./comment.component";

const CommentSection = () => {
  const [inputComment, setInputComment] = useState<string>("");
  const [isFocused, setIsFocused] = useState(false);
  const [comments, setComments] = useState<CommentProps[]>([]);

  const handleCommentSubmit = () => {
    if (inputComment.trim()) {
      const newComment = {
        username: "Usuário sem nome",
        comment: inputComment,
      };
      setComments([...comments, newComment]);
      setInputComment("");
      setIsFocused(false);
    }
  };

  return (
    <div className="flex flex-col items-start justify-start w-full">
      <div className="flex gap-4 items-start justify-start w-full">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <div className="flex flex-col w-full items-end">
          <Textarea
            value={inputComment}
            onChange={(event) => setInputComment(event.target.value)}
            className="w-full border p-2"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setTimeout(() => setIsFocused(false), 100)}
          />
          {isFocused && (
            <Button
              onClick={handleCommentSubmit}
              className={clsx(
                "w-max mt-4 transition-opacity duration-300 ease-in-out",
                isFocused ? "opacity-100" : "opacity-0 pointer-events-none"
              )}
            >
              Comentar
            </Button>
          )}
        </div>
      </div>

      <div className="px-2 py-5 md:py-10 mt-5 w-full">
        {comments.map((comment) => (
          <CommentComponent
            comment={comment.comment}
            username={comment.username}
          />
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
