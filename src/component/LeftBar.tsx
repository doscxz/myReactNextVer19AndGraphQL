import { ROUTES } from '@/constants/route';
import { CustomLink } from '@/shared/CustomLink';

export const LeftBar = () => {
  return (
    <div className="flex justify-around bg-violet-900 py-3">
      <CustomLink href={ROUTES.TransitionReact}>TransitionReact</CustomLink>
      <CustomLink href={ROUTES.ActionStateReact}>ActionStateReact</CustomLink>
    </div>
  );
};
