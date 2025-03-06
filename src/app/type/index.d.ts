type TActiveLinksProps = {
  url: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}
type TMenuItem = {
     url: string;
  title: string;
  icon: React.ReactNode;
}
// User
type TCreateUserParams = {
  clerkId: string;
  username: string;
  email_address: string;
  name?: string;
  avatar?: string;
};
export { ActiveLinkProps, TCreateUserParams, TMenuItem };