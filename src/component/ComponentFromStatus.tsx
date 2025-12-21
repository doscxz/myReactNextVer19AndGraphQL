import { CustomButton } from '@/shared/CustomButton';
import { useFormStatus } from 'react-dom';

export const ComponentFromStatus = () => {
  const { action, data, method, pending } = useFormStatus();

  const handleClick = () => {
    if (typeof action === 'function') {
      action(data);
    } else {
      console.warn('Action is not a function, cannot call');
    }
  };

  return (
    <div>
      <span>информация в дочернем компоненте от хука useFormStatus:</span>
      <br />
      <span>Загрузка: {pending ? 'идет' : 'нет'}</span>
      <CustomButton onClick={handleClick} />
    </div>
  );
};
