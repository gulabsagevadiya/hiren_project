'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';

const contactSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  company: z.string().min(2, 'Company name is required'),
  serviceType: z.string().min(1, 'Please select a service type'),
  projectDescription: z.string().min(10, 'Please provide project details'),
  urgency: z.string(),
  emergencyService: z.boolean().default(false),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      emergencyService: false,
      urgency: 'normal'
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      
      reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl text-gray-900">Request a Quote</CardTitle>
        <p className="text-gray-600">
          Fill out the form below and we'll get back to you within 24 hours with a detailed quote.
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name *</Label>
              <Input
                id="firstName"
                {...register('firstName')}
                className={errors.firstName ? 'border-red-500' : ''}
              />
              {errors.firstName && (
                <p className="text-sm text-red-500">{errors.firstName.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name *</Label>
              <Input
                id="lastName"
                {...register('lastName')}
                className={errors.lastName ? 'border-red-500' : ''}
              />
              {errors.lastName && (
                <p className="text-sm text-red-500">{errors.lastName.message}</p>
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                {...register('email')}
                className={errors.email ? 'border-red-500' : ''}
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                {...register('phone')}
                className={errors.phone ? 'border-red-500' : ''}
              />
              {errors.phone && (
                <p className="text-sm text-red-500">{errors.phone.message}</p>
              )}
            </div>
          </div>

          {/* Company */}
          <div className="space-y-2">
            <Label htmlFor="company">Company Name *</Label>
            <Input
              id="company"
              {...register('company')}
              className={errors.company ? 'border-red-500' : ''}
            />
            {errors.company && (
              <p className="text-sm text-red-500">{errors.company.message}</p>
            )}
          </div>

          {/* Service Type */}
          <div className="space-y-2">
            <Label>Service Type *</Label>
            <Select onValueChange={(value) => setValue('serviceType', value)}>
              <SelectTrigger className={errors.serviceType ? 'border-red-500' : ''}>
                <SelectValue placeholder="Select the type of service needed" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ndt">Non-Destructive Testing</SelectItem>
                <SelectItem value="weld">Weld Inspection</SelectItem>
                <SelectItem value="material">Material Testing</SelectItem>
                <SelectItem value="pressure">Pressure Testing</SelectItem>
                <SelectItem value="structural">Structural Inspection</SelectItem>
                <SelectItem value="pipeline">Pipeline Services</SelectItem>
                <SelectItem value="other">Other/Multiple Services</SelectItem>
              </SelectContent>
            </Select>
            {errors.serviceType && (
              <p className="text-sm text-red-500">{errors.serviceType.message}</p>
            )}
          </div>

          {/* Urgency */}
          <div className="space-y-2">
            <Label>Project Urgency</Label>
            <Select onValueChange={(value) => setValue('urgency', value)} defaultValue="normal">
              <SelectTrigger>
                <SelectValue placeholder="Select urgency level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="emergency">Emergency (24 hours)</SelectItem>
                <SelectItem value="urgent">Urgent (2-3 days)</SelectItem>
                <SelectItem value="normal">Normal (1-2 weeks)</SelectItem>
                <SelectItem value="planned">Planned (Flexible)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Emergency Service */}
          <div className="flex items-center space-x-2">
            <Checkbox
              id="emergencyService"
              onCheckedChange={(checked) => setValue('emergencyService', checked as boolean)}
            />
            <Label htmlFor="emergencyService" className="text-sm">
              This is an emergency requiring immediate response (24/7 service)
            </Label>
          </div>

          {/* Project Description */}
          <div className="space-y-2">
            <Label htmlFor="projectDescription">Project Details *</Label>
            <Textarea
              id="projectDescription"
              rows={4}
              placeholder="Please describe your project, including materials, scope, timeline, and any specific requirements..."
              {...register('projectDescription')}
              className={errors.projectDescription ? 'border-red-500' : ''}
            />
            {errors.projectDescription && (
              <p className="text-sm text-red-500">{errors.projectDescription.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <Button 
            type="submit" 
            size="lg" 
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Request Quote'}
          </Button>

          <p className="text-sm text-gray-500 text-center">
            * Required fields. We'll respond within 24 hours or immediately for emergency requests.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}