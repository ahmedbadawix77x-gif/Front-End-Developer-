const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="font-body text-xs tracking-[0.15em] text-muted-foreground">
          © {new Date().getFullYear()} Ahmed Badawy. All rights reserved.
        </p>
        <p className="font-body text-xs tracking-[0.15em] text-muted-foreground/50">
          Built with React & TypeScript
        </p>
      </div>
    </footer>
  );
};

export default Footer;
