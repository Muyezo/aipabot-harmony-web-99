import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Newsletter = () => {
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    
    toast({
      title: "Thanks for subscribing!",
      description: "We'll keep you updated with our latest news.",
    });
    
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-white">Stay Updated</h3>
      <p className="text-sm">Subscribe to our newsletter for the latest updates.</p>
      <form onSubmit={handleSubscribe} className="space-y-2">
        <Input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
          className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
        />
        <Button 
          type="submit"
          className="w-full bg-primary hover:bg-primary/90 text-white"
        >
          Subscribe
        </Button>
      </form>
    </div>
  );
};

export default Newsletter;