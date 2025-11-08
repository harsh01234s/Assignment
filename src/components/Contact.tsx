import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import footerMandala from "@/assets/footer-mandala.svg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);

const validateEmail = (email: string) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

  const validateNumber = (number: string) => {
    return number.length == 10;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Front-end Validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("All fields are required!");
      return;
    }

    if (!validateEmail(formData.email)) {
      toast.error("Please enter a valid email address!");
      return;
    }

    if (!validateNumber(formData.phone)){
      toast.error("Please enter a valid number!");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("https://vernanbackend.ezlab.in/api/contact-us/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      if (response.ok) {
        toast.success("Form Submitted");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        toast.error("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Network error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      {/* Mandala Decorations */}
      <div className="absolute top-10 right-10 w-64 h-64 opacity-30">
        <img src={footerMandala} alt="" className="w-full h-full object-contain" />
      </div>
      <div className="absolute bottom-10 left-10 w-64 h-64 opacity-30">
        <img src={footerMandala} alt="" className="w-full h-full object-contain" />
      </div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Side - Info */}
          <div className="space-y-6">
            <h2 className="text-4xl font-semibold text-navy">Join the Story</h2>
            <p className="text-lg text-foreground">
              Ready to bring your vision to life? Let's talk.
            </p>
            
            <div className="space-y-4 text-foreground">
              <p>
                Whether you have an idea, a question, or simply want to see how we 
                can work together, we’re just a message away.
              </p>
              <p>
                Let's catch up over coffee.
              </p>
              <p className="font-medium">
                Great stories always begin with a good conversation.
              </p>
            </div>

            <div className="pt-6 space-y-2">
              <a 
                href="mailto:varnan@varnanfilms.co.in" 
                className="block text-primary hover:underline"
              >
                varnan@varnanfilms.co.in
              </a>
              <a 
                href="tel:+919876543210" 
                className="block text-primary hover:underline"
              >
                +91 98765 43210
              </a>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-card/50 backdrop-blur-sm p-8 rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-background/80"
                />
              </div>
              
              <div>
                <Input
                  type="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-background/80"
                />
              </div>
              
              <div>
                <Input
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-background/80"
                />
              </div>
              
              <div>
                <Textarea
                  placeholder="Your message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="bg-background/80"
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={loading}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
              >
                {loading ? "Submitting..." : "Submit"}
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Lace Border */}
      <div className="absolute bottom-0 left-0 right-0 h-12 lace-border" />
    </section>
  );
};

export default Contact;
