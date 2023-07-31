import { ComponentProps } from "@/types";

export interface Chat {
  id?: string;
  name?: string;
  message: string;
  author: "user" | "admin-auto" | "admin";
  type?: "media" | "text";
  read?: boolean;
}

export interface ChatProps extends ComponentProps, Chat {}

export interface WidgetProps extends ComponentProps {
  description?: string;
  title?: string;
  subtitle?: string;
  theme?: string;
  position?: "bottom-left" | "bottom-right";
}
