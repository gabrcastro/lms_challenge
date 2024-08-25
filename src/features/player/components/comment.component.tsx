import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import clsx from "clsx";
import { MessagesSquareIcon } from "lucide-react";
import { useState } from "react";

export interface CommentProps {
  username: string;
  comment: string;
}
export function CommentComponent({ username, comment }: CommentProps) {
  const [inputComment, setInputComment] = useState<string>("");
  const [comments, setComments] = useState<CommentProps[]>([]);

  const handleCommentSubmit = () => {
    if (inputComment.trim()) {
      const newComment = {
        username: "Usuário sem nome",
        comment: inputComment,
      };
      setComments([...comments, newComment]);
      setInputComment("");
    }
  };

  return (
    <div className="flex gap-4 items-start justify-start">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <div className="flex flex-col w-full  mb-10">
        <span className="text-xs text-neutral-600 font-light">{username}</span>

        <span className="text-sm text-neutral-600 font-light mt-2">
          {comment}
        </span>

        <div className="flex w-full items-start justify-end mt-1">
          <Dialog>
            <DialogTrigger>
              <Button
                onClick={() => {}}
                variant={"ghost"}
                className="flex gap-2 text-blue-800 text-xs"
              >
                <MessagesSquareIcon className="size-4 " />
                Responder
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Digite sua resposta abaixo</DialogTitle>
                <DialogDescription>
                  <div className="flex flex-col w-full items-end mt-10">
                    <Textarea
                      value={inputComment}
                      onChange={(event) => setInputComment(event.target.value)}
                      className="w-full border p-2"
                    />
                    <Button
                      onClick={handleCommentSubmit}
                      className={clsx(
                        "w-max mt-4 transition-opacity duration-300 ease-in-out"
                      )}
                    >
                      Responder
                    </Button>
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}
