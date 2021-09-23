import { findUserByEmail, findUserById } from '@api-lib/db';
import bcrypt from 'bcryptjs';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
