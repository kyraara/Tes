import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import { Helmet } from 'react-helmet-async';
import { getMeta } from '../lib/seo';

const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email'),
  message: z.string().min(1, 'Message is required'),
});

type FormData = z.infer<typeof schema>;

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormData) => {
    fetch('https://formsubmit.co/example@example.com', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then(() => alert('Message sent!'))
      .catch(() => alert('Something went wrong'));
    reset();
  };

  return (
    <>
      <Helmet>
        <title>{getMeta({ title: 'Contact – Kyra Aara' }).title}</title>
      </Helmet>
      <Section title="Contact">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto max-w-md space-y-4"
        >
          <div>
            <label htmlFor="name" className="mb-1 block text-sm font-medium">
              Name
            </label>
            <input
              id="name"
              className="w-full rounded border border-gray-300 p-2 dark:bg-gray-800"
              {...register('name')}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full rounded border border-gray-300 p-2 dark:bg-gray-800"
              {...register('email')}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="message" className="mb-1 block text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              className="w-full rounded border border-gray-300 p-2 dark:bg-gray-800"
              {...register('message')}
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-600">
                {errors.message.message}
              </p>
            )}
          </div>
          <Button type="submit" className="w-full">
            Send
          </Button>
        </form>
      </Section>
    </>
  );
};

export default Contact;
