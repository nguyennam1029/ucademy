import { TMenuItem } from "@/app/type";
import {
  IconPlay,
  IconStudy,
  IconExplore,
  IconUsers,
  IconOrder,
  IconComment,
} from "@/components/icons";

export const menuItems: TMenuItem[] = [
  {
    url: "/",
    title: "Khám phá",
    icon: <IconPlay className="size-5" />,
  },
  {
    url: "/study",
    title: "Khu vực học tập",
    icon: <IconStudy className="size-5" />,
  },
  {
    url: "/manage/course",
    title: "Quản lý khóa học",
    icon: <IconExplore className="size-5" />,
  },
  {
    url: "/manage/member",
    title: "Quản lý thành viên",
    icon: <IconUsers className="size-5" />,
  },
  {
    url: "/manage/order",
    title: "Quản lý đơn hàng",
    icon: <IconOrder className="size-5" />,
  },
  {
    url: "/manage/comment",
    title: "Quản lý bình luận",
    icon: <IconComment className="size-5" />,
  },
];
