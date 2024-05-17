interface LayoutWrapperProps {
  children: React.ReactNode;
}

const LayoutWrapper = ({ children }: LayoutWrapperProps) => {
  return (
    <div className="bg-gray-200 dark:bg-slate-800 dark:text-white">
      <div className="container md:max-w-[1360px] min-h-screen pb-6">
        {children}
      </div>
    </div>
  );
};

export default LayoutWrapper;
