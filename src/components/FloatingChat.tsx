import React, { useState, useRef, useEffect } from 'react';
import { Send, X, MessageCircle } from 'lucide-react';
import { format } from 'date-fns';
import { motion, AnimatePresence } from 'framer-motion';
import ziptocodelogo from '@/assets/ziptocode-logo.png';

interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

interface FloatingChatProps {
  onChatStateChange?: (isOpen: boolean) => void;
}

const FloatingChat = ({ onChatStateChange }: FloatingChatProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [typingText, setTypingText] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const chatWindowRef = useRef<HTMLDivElement>(null);

  const iconVariants = {
    float: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
  };

  const messageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" as const },
    },
  };

  // Notify parent about chat state change
  useEffect(() => {
    onChatStateChange?.(isChatOpen);
  }, [isChatOpen, onChatStateChange]);

  // Static replies about ZiptoCode Tech Solution
  const getStaticReply = (userInput: string): string | null => {
    const lowerInput = userInput.toLowerCase().trim();

    // CEO/Founder/Team information
    if (lowerInput.includes('ceo') || lowerInput.includes('founder') || lowerInput.includes('owner') || lowerInput.includes('team') || lowerInput.includes('ridoan') || lowerInput.includes('zisan') || lowerInput.includes('who created') || lowerInput.includes('who made') || lowerInput.includes('who is behind')) {
      return `Meet Ridoan Zisan - CEO & Founder of ZiptoCode Tech Solution

Ridoan Zisan is a passionate tech entrepreneur and full-stack developer from Bogura, Bangladesh. At just 18 years old, he has already made significant contributions to the tech community.

Education:
- HSC (Science) from Karatoa Multimedia School and College - GPA: 4.25
- SSC (Science) from Dhunat Govt N.U. Pilot Model High School - GPA: 5.00

Certifications & Training:
- Google IT Support Professional Certificate
- Digital Marketing Certification (HubSpot Academy)
- Complete Web Development Bootcamp
- AI & Machine Learning (IBM via Coursera)
- Cloud Computing Fundamentals (Microsoft Learn)

Notable Projects:
- BOBDO: Blood donation platform serving 68k+ community members
- Youth Hope BD: Platform for youth development
- ZupraMart: All-in-one shopping platform

Skills: Full-stack Development, AI/ML, Digital Marketing, Cloud Computing

Contact: ridoan.zisan@gmail.com | +880 1712525910
Portfolio: https://ridoan-zisan.netlify.app`;
    }

    // Company information
    if (lowerInput.includes('about') || lowerInput.includes('company') || lowerInput.includes('ziptocode') || lowerInput === 'about') {
      return `ZiptoCode Tech Solution is a leading IT company specializing in web development, web applications, and smart IT solutions.

Founded by Ridoan Zisan, we serve businesses, organizations, educational institutions, and many more with cutting-edge technology solutions.

Our mission is to transform your ideas into powerful digital solutions.`;
    }

    // Services
    if (lowerInput.includes('service') || lowerInput.includes('what do you do') || lowerInput.includes('offer')) {
      return `ZiptoCode Tech Solution offers:

- Website Development
- Web Application Development
- Smart IT Solutions
- Automation Services
- SEO Optimization
- Custom Software Development
- E-commerce Solutions
- Educational Platform Development

We use modern technologies like HTML5, CSS3, JavaScript, TypeScript, and Firebase.`;
    }

    // Contact
    if (lowerInput.includes('contact') || lowerInput.includes('email') || lowerInput.includes('phone') || lowerInput.includes('reach') || lowerInput.includes('whatsapp')) {
      return `You can reach ZiptoCode Tech Solution through:

Email: ziptocode.bd@gmail.com
Phone: +880 9638-845910
WhatsApp: +880 1712-525910
Facebook: facebook.com/ziptocode

CEO Direct Contact:
Email: ridoan.zisan@gmail.com
Phone: +880 1712-525910

Feel free to contact us for any inquiries or to start your project!`;
    }

    // Technologies
    if (lowerInput.includes('tech') || lowerInput.includes('stack') || lowerInput.includes('technology') || lowerInput.includes('use')) {
      return `We master the following technologies:

- HTML5 & CSS3
- JavaScript & TypeScript
- Firebase
- SEO Optimization
- GitHub
- Netlify & Vercel
- Automation Tools

We choose the best technology stack based on your project requirements.`;
    }

    // Pricing
    if (lowerInput.includes('price') || lowerInput.includes('cost') || lowerInput.includes('pricing') || lowerInput.includes('charge') || lowerInput.includes('rate')) {
      return `Our pricing depends on project scope and requirements.

We offer:
- Competitive rates
- Flexible payment options
- Custom quotes based on your needs

Contact us at ziptocode.bd@gmail.com for a free consultation and quote!`;
    }

    // Process
    if (lowerInput.includes('process') || lowerInput.includes('how do you work') || lowerInput.includes('methodology')) {
      return `Our Process:

1. Discovery - We analyze your requirements
2. Strategy - We plan the best approach
3. Development - We build with quality code
4. Launch - We deploy and provide support

We follow agile methodology with regular updates and transparent communication.`;
    }

    // Timeline
    if (lowerInput.includes('time') || lowerInput.includes('duration') || lowerInput.includes('how long') || lowerInput.includes('deadline')) {
      return `Project timelines vary based on complexity:

- Simple Website: 1-2 weeks
- Web Application: 2-6 weeks
- Complex Solutions: 1-3 months

We always deliver on time and keep you updated throughout the process.`;
    }

    // Portfolio
    if (lowerInput.includes('portfolio') || lowerInput.includes('work') || lowerInput.includes('project') || lowerInput.includes('example')) {
      return `We have completed 50+ successful projects including:

- E-commerce Platforms
- Educational Management Systems
- Business Automation Tools
- Custom Web Applications
- Blood Donation Platform (BOBDO - 68k+ users)
- Youth Development Platform (Youth Hope BD)

Visit our Portfolio section to see detailed case studies!`;
    }

    // Support
    if (lowerInput.includes('support') || lowerInput.includes('help') || lowerInput.includes('maintenance')) {
      return `We provide comprehensive support:

- 24/7 Technical Support
- Regular Maintenance
- Security Updates
- Performance Optimization
- Training & Documentation

Your success is our priority!`;
    }

    // Greetings
    if (lowerInput.includes('hello') || lowerInput.includes('hi') || lowerInput.includes('hey') || lowerInput.includes('assalamualaikum')) {
      return "Hello! Welcome to ZiptoCode Tech Solution. I'm here to help you learn about our services.\n\nYou can ask about:\n- Services\n- Technologies\n- Pricing\n- Process\n- Portfolio\n- Contact\n- CEO/Founder\n\nHow can I assist you today?";
    }

    // Thanks
    if (lowerInput.includes('thank') || lowerInput.includes('thanks')) {
      return "You're welcome! If you have any more questions about ZiptoCode Tech Solution, feel free to ask.\n\nReady to start your project? Contact us at ziptocode.bd@gmail.com";
    }

    return null;
  };

  useEffect(() => {
    if (isChatOpen) {
      inputRef.current?.focus();
    }
  }, [isChatOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isChatOpen &&
        chatWindowRef.current &&
        !chatWindowRef.current.contains(event.target as Node) &&
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsChatOpen(false);
      }
    };

    if (isChatOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isChatOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const typeMessage = async (text: string) => {
    setTypingText('');
    for (let i = 0; i < text.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 15));
      setTypingText(text.substring(0, i + 1));
      // Auto-scroll while typing
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
    return text;
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const callAPI = async (prompt: string): Promise<string> => {
    setIsLoading(true);

    // Check for static replies first
    const staticReply = getStaticReply(prompt);
    if (staticReply) {
      return staticReply;
    }

    // For unknown queries, use AI API
    try {
      const apiUrl = 'https://backend.buildpicoapps.com/aero/run/llm-api?pk=v1-Z0FBQUFBQm5HUEtMSjJkakVjcF9IQ0M0VFhRQ0FmSnNDSHNYTlJSblE0UXo1Q3RBcjFPcl9YYy1OZUhteDZWekxHdWRLM1M1alNZTkJMWEhNOWd4S1NPSDBTWC12M0U2UGc9PQ==';
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          prompt: `You are ZiptoCode AI Assistant. Answer questions about ZiptoCode Tech Solution, an IT company founded by Ridoan Zisan that builds websites, web apps, and smart IT solutions. Be helpful and professional. User question: ${prompt}` 
        }),
      });

      const data = await response.json();
      return data.status === 'success'
        ? data.text
        : 'I apologize, but I could not process your request. Please try again or contact us at ziptocode.bd@gmail.com';
    } catch (error) {
      console.error('API Error:', error);
      return 'I apologize for the inconvenience. Please contact us directly at ziptocode.bd@gmail.com for assistance.';
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input.trim(),
      role: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    try {
      const response = await callAPI(userMessage.content);
      const typedResponse = await typeMessage(response);

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: typedResponse,
        role: 'assistant',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
      setTypingText('');
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: 'Sorry, I could not connect. Please try again or email us at ziptocode.bd@gmail.com',
        role: 'assistant',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
      setTypingText('');
    } finally {
      setIsLoading(false);
      inputRef.current?.focus();
    }
  };

  const handleKeywordClick = async (keyword: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      content: keyword,
      role: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);

    try {
      const response = await callAPI(keyword);
      const typedResponse = await typeMessage(response);

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: typedResponse,
        role: 'assistant',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setTypingText('');
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: 'Sorry, there was an error. Please try again.',
        role: 'assistant',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
      setTypingText('');
    } finally {
      setIsLoading(false);
      inputRef.current?.focus();
    }
  };

  const renderMessageContent = (content: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = content.split(urlRegex);

    return parts.map((part, index) => {
      if (part.match(urlRegex)) {
        return (
          <a
            key={index}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 underline"
          >
            {part}
          </a>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/20 backdrop-blur-sm z-[9997]"
          />
        )}
      </AnimatePresence>

      <div
        className="fixed bottom-6 right-6 flex flex-col items-end gap-2 z-[9999]"
        ref={containerRef}
      >
        {/* Chat Button */}
        <motion.button
          onClick={() => setIsChatOpen(!isChatOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-14 h-14 rounded-full shadow-lg bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-primary/50 flex items-center justify-center overflow-hidden"
          style={{ boxShadow: "0 0 20px hsl(var(--primary) / 0.5)" }}
          title={isChatOpen ? 'Close chat' : 'Chat with us'}
        >
          {isChatOpen ? (
            <X size={24} />
          ) : (
            <MessageCircle size={24} />
          )}
        </motion.button>

        {/* Chat Window */}
        <AnimatePresence>
          {isChatOpen && (
            <motion.div
              ref={chatWindowRef}
              className="fixed bottom-24 right-6 w-[350px] sm:w-[400px] max-w-[calc(100vw-3rem)] bg-card rounded-2xl shadow-2xl z-[9999] flex flex-col max-h-[500px] border border-border"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-4 rounded-t-2xl flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div>
                    <h2 className="font-semibold text-lg">ZiptoCode AI</h2>
                    <p className="text-xs text-primary-foreground/80">Always here to help</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsChatOpen(false)}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors p-1 hover:bg-primary-foreground/20 rounded-full"
                  aria-label="Close chat"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-[300px] max-h-[350px] bg-gradient-to-b from-card to-background">
                {messages.length === 0 && (
                  <motion.div
                    className="text-center mt-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <motion.div variants={iconVariants} animate="float" className="mb-4">
                      <div className="inline-block p-4 rounded-full">
                        <img src={ziptocodelogo} alt="ZiptoCode" className="w-14 h-14 object-contain" />
                      </div>
                    </motion.div>
                    <p className="text-lg font-semibold text-foreground mb-2">Welcome to ZiptoCode</p>
                    <p className="text-sm text-muted-foreground mb-4 px-4">
                      Ask me anything about our services
                    </p>
                    <div className="mt-4 text-xs space-y-2 px-4">
                      <p className="font-medium text-primary mb-2">Quick questions:</p>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {['Services', 'Technologies', 'Pricing', 'CEO/Founder', 'Contact', 'Portfolio'].map((keyword) => (
                          <button
                            key={keyword}
                            onClick={() => handleKeywordClick(keyword)}
                            className="bg-card hover:bg-primary/10 text-primary rounded-full px-3 py-1 shadow-sm border border-primary/20 hover:border-primary/40 transition-all text-xs font-medium"
                          >
                            {keyword}
                          </button>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    className={`flex items-start gap-2 ${message.role === 'user' ? 'flex-row-reverse' : ''}`}
                    variants={messageVariants}
                    initial="hidden"
                    animate="visible"
                  >
<div
  className={`w-8 h-8 flex items-center justify-center flex-shrink-0 ${
    message.role === 'user'
      ? 'rounded-full overflow-hidden bg-gradient-to-br from-primary to-primary/80'
      : ''
  }`}
>
  {message.role === 'user' ? (
    <span className="text-primary-foreground text-xs font-bold">You</span>
  ) : (
    <img src={ziptocodelogo} alt="ZiptoCode" className="w-5 h-5 object-contain" />
  )}
</div>
                    <div
                      className={`rounded-2xl px-3 py-2 max-w-[75%] shadow-sm ${
                        message.role === 'user'
                          ? 'bg-gradient-to-br from-primary to-primary/80 text-primary-foreground'
                          : 'bg-card text-foreground border border-border'
                      }`}
                    >
                      <p className="text-sm whitespace-pre-wrap leading-relaxed">
                        {renderMessageContent(message.content)}
                      </p>
                      <p className={`text-xs mt-1 ${message.role === 'user' ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                        {format(message.timestamp, 'HH:mm')}
                      </p>
                    </div>
                  </motion.div>
                ))}

                {(isLoading || typingText) && (
                  <motion.div
                    className="flex items-start gap-2"
                    variants={messageVariants}
                    initial="hidden"
                    animate="visible"
                  >
    <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
      <img src={ziptocodelogo} alt="ZiptoCode" className="w-5 h-5 object-contain" />
    </div>
                    <div className="bg-card rounded-2xl px-3 py-2 shadow-sm border border-border">
                      {typingText ? (
                        <p className="text-sm text-foreground whitespace-pre-wrap leading-relaxed">
                          {typingText}<span className="animate-pulse">|</span>
                        </p>
                      ) : (
                        <div className="flex gap-1">
                          <motion.div
                            className="w-2 h-2 bg-primary rounded-full"
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                          />
                          <motion.div
                            className="w-2 h-2 bg-primary rounded-full"
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                          />
                          <motion.div
                            className="w-2 h-2 bg-primary rounded-full"
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                          />
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="border-t border-border p-3 bg-card rounded-b-2xl">
                <form onSubmit={handleSubmit} className="flex gap-2 items-center">
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask about ZiptoCode..."
                    disabled={isLoading || !!typingText}
                    className="flex-1 rounded-full border border-border bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed transition-all text-foreground placeholder:text-muted-foreground"
                  />
                  <motion.button
                    type="submit"
                    disabled={!input.trim() || isLoading || !!typingText}
                    className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-full w-10 h-10 hover:from-primary/90 hover:to-primary/70 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center shadow-md flex-shrink-0"
                    whileHover={!isLoading && input.trim() && !typingText ? { scale: 1.05 } : {}}
                    whileTap={!isLoading && input.trim() && !typingText ? { scale: 0.95 } : {}}
                  >
                    <Send className="w-4 h-4" />
                    <span className="sr-only">Send</span>
                  </motion.button>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default FloatingChat;
